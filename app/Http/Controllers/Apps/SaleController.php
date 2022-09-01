<?php

namespace App\Http\Controllers\Apps;

use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SaleController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('Apps/Sales/Index');
    }

    /**
     * filter
     *
     * @param  mixed $request
     * @return void
     */
    public function filter(Request $request)
    {
        $this->validate($request, [
            'start_date'  => 'required',
            'end_date'    => 'required',
        ]);

        //get data sales by range date
        $sales = Transaction::with('cashier', 'customer')
            ->whereDate('created_at', '>=', $request->start_date)
            ->whereDate('created_at', '<=', $request->end_date)
            ->get();

        //get total sales by range date
        $total = Transaction::whereDate('created_at', '>=', $request->start_date)
            ->whereDate('created_at', '<=', $request->end_date)
            ->sum('grand_total');

        return Inertia::render('Apps/Sales/Index', [
            'sales'    => $sales,
            'total'    => (int) $total
        ]);
    }
}
