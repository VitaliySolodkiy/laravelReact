<?php

namespace App\Http\Controllers;

use App\Mail\OrderShipped;
use App\Models\Order;
use App\Models\OrderItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{

    public function index()
    {
        return Order::all();
    }

    function placeOrder(Request $request)
    {
        // dd($request->all());

        $order = new Order();
        $order->user_email = $request->formValues['email'];
        $order->user_phone = $request->formValues['phone'];
        $order->total_sum = array_reduce($request->cartItems, function ($carry, $item) {
            return $carry += $item['price'] * $item['amount'];
        });
        $order->save();

        foreach ($request->cartItems as $item) {
            $orderItem = new OrderItems();
            $orderItem->order_id = $order->id;
            $orderItem->product_id = $item['id'];
            $orderItem->product_name = $item['name'];
            $orderItem->product_price = $item['price'];
            $orderItem->product_amount = $item['amount'];
            $orderItem->save();
        };

        //Mail
        Mail::to('majestis777@gmail.com')->send(new OrderShipped($order));

        return response()->json(['order_id' => $order->id]);
    }

    public function orderDetails($id)
    {
        $orderProducts = OrderItems::where('order_id', $id)->get();
        return response()->json($orderProducts);
    }
}
