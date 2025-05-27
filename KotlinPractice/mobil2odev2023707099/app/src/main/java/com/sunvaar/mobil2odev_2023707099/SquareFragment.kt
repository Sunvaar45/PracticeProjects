package com.sunvaar.mobil2odev_2023707099

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText

class SquareFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_square, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<Button>(R.id.calculate_square_button).setOnClickListener {

            val squareSide = view.findViewById<EditText>(R.id.square_side_input).text.toString().toFloat()

            val squarePerimeterResult = (squareSide * 4).toString()
            view.findViewById<EditText>(R.id.square_perimeter_result).setText(squarePerimeterResult)

            val squareAreaResult = (squareSide * squareSide).toString()
            view.findViewById<EditText>(R.id.square_area_result).setText(squareAreaResult)
        }
    }
}