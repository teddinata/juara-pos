<?php

namespace App\Http\Controllers\Apps;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Profit;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;


class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // day
        $day = date('d');

        // week subdays
        $week = Carbon::now()->subDays(7);

        // chart sales 7 days
        $chart_sales_week = Transaction::select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(grand_total) as grand_total'))
            ->where('created_at', '>=', $week)
            ->groupBy('date')
            ->get();

        if(count($chart_sales_week)) {
            foreach ($chart_sales_week as $result) {
                $sales_date[] = $result->date;
                $grand_total[] = (int)$result->grand_total;
            }
        } else {
            $sales_date[] = "";
            $grand_total[] = "";
        }

        // count sales today
        $count_sales_today = Transaction::whereDay('created_at', $day)->count();

        // sum sales today
        $sum_sales_today = Transaction::whereDay('created_at', $day)->sum('grand_total');

        // sum profit today
        $sum_profits_today = Profit::whereDay('created_at', $day)->sum('total');

        // get product limit stock
        $product_limit_stock = Product::where('stock', '<=', 10)->get();

        // chart best selling product transaction details
        $chart_best_product = DB::table('transaction_details')
            ->addSelect(DB::raw('products.title as title, SUM(transaction_details.qty) as qty) as total'))
            ->join('products', 'products.id', '=', 'transaction_details.product_id')
            ->groupBy('transaction_details.product_id')
            ->orderBy('total', 'desc')
            ->limit(5)
            ->get();

        if(count($chart_best_product)) {
            foreach ($chart_best_product as $data) {
                $product[] = $data->title;
                $total[] = (int)$data->qty;
            }
        } else {
            $product[] = "";
            $total[] = "";
        }

        return Inertia::render('Apps/Dashboard/Index', [
            'count_sales_today' => $count_sales_today,
            'sum_sales_today' => $sum_sales_today,
            'sum_profits_today' => $sum_profits_today,
            'product_limit_stock' => $product_limit_stock,
            'sales_date' => $sales_date,
            'grand_total' => $grand_total,
            'product' => $product,
            'total' => $total,
        ]);

    }
}
