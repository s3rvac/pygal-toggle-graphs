/**
* pygal-toggle-graphs.js - Toggle the visibility of graphs in a pygal chart by
*                          clicking on the legend.
*
* Copyright (c) 2014 Petr Zemek <s3rvac@gmail.com>
*
* Distributed under GNU LGPLv3:
*
*    This program is free software: you can redistribute it and/or modify it
*    under the terms of the GNU Lesser General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or (at your
*    option) any later version.
*
*    This program is distributed in the hope that it will be useful, but
*    WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
*    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public
*    License for more details.
*
*    You should have received a copy of the GNU Lesser General Public License
*    along with this program. If not, see <http://www.gnu.org/licenses/>.
*
* Homepage: https://github.com/s3rvac/pygal-toggle-graphs
*/

(function() {
	init = function(ctx) {
		$vg('.activate-serie', ctx).click((function() {
			var num = this.id.replace('activate-serie-', '');
			var $plot = $vg('.serie-' + num + ' .reactive', ctx);
			var $plotOverlay = $vg('.text-overlay .serie-' + num, ctx);
			var $rect = $vg(this).children('rect');
			if ($plotOverlay.css('visibility') == 'hidden') {
				// Show.
				$rect.css('fill', '');
				$plotOverlay.css('visibility', 'visible');
				return $plot.show();
			} else {
				// Hide.
				$rect.css('fill', 'transparent');
				$plotOverlay.css('visibility', 'hidden');
				return $plot.hide();
			}
		}));
	};

	$vg(function() {
		var $charts = $vg('.pygal-chart');
		if ($charts.size()) {
			return $charts.each(function() {
				return init($vg(this));
			});
		} else {
			return init();
		}
	});
}).call(this);
