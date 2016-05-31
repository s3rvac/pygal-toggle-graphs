#!/usr/bin/env python

"""Generates the example by using the currently installed pygal version."""

import pygal

js = [
    'https://kozea.github.com/pygal.js/javascripts/svg.jquery.js',      # Original
    'https://kozea.github.com/pygal.js/javascripts/pygal-tooltips.js',  # Original
    'https://rawgit.com/s3rvac/pygal-toggle-graphs/master/pygal-toggle-graphs.js'
]

GraphStyle = pygal.style.Style(
    background='transparent',
    plot_background='transparent',
    foreground='rgba(0, 0, 0, 0.9)',
    foreground_light='rgba(0, 0, 0, 0.9)',
    foreground_dark='rgba(0, 0, 0, 0.25)',
    colors=(
        'rgb(12,  55,149)',
        'rgb(0,  160,  0)',
        'rgb(220,  0,  0)',
        'rgb(228,127,  0)',
        'rgb(201, 31,184)',
        'rgb(188,191, 22)',
        'rgb(0,   0,   0)'
    )
)

# The data below for this example are from http://pygal.org/chart_types/.
line_chart = pygal.Line(style=GraphStyle, js=js, explicit_size=True)
line_chart.title = 'Browser usage evolution (in %)'
line_chart.x_labels = map(str, range(2002, 2013))
line_chart.add('Firefox', [None, None, 0,    16.6,   25,   31, 36.4, 45.5, 46.3, 42.8, 37.1])
line_chart.add('Chrome',  [None, None, None, None, None, None,    0,  3.9, 10.8, 23.8, 35.3])
line_chart.add('IE',      [85.8, 84.6, 84.7, 74.5,   66, 58.6, 54.7, 44.8, 36.2, 26.6, 20.1])
line_chart.add('Others',  [14.2, 15.4, 15.3,  8.9,    9, 10.4,  8.9,  5.8,  6.7,  6.8,  7.5])
line_chart.render_to_file('graph.svg')
