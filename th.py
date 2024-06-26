# -*- coding: utf-8 -*-
"""app.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1hqUQSG8pl0fElnmdBq6pzjNe5I44RS8t
"""

import streamlit as st

def find_largest(a, b, c):
    """
    Finds the largest value among three given numbers.
    """
    return max(a, b, c)

# Define the Streamlit app
def app():
    # Set the title and page layout
    st.set_page_config(page_title='Find the Largest Number')
    st.title('Find the Largest Number')

    # Get user input
    num1 = st.number_input('Enter the first number:')
    num2 = st.number_input('Enter the second number:')
    num3 = st.number_input('Enter the third number:')

    # Compute the result
    largest_num = find_largest(num1, num2, num3)

    # Display the result
    st.write(f"The largest number is {largest_num}.")

if __name__ == '__main__':
    app()