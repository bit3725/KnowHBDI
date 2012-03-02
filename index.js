(function($) {
	$(document).ready(function() {
		$("#reorder").click(function() {
			var carFactorNodes = $("section.reorder_slide ul.car_factor")
			var typeA = $("section.reorder_slide li.type_a");
			var typeB = $("section.reorder_slide li.type_b");
			var typeC = $("section.reorder_slide li.type_c");
			var typeD = $("section.reorder_slide li.type_d");
			var groupNodes = $("section.reorder_slide ul.factor_group");
			var groupA = $("section.reorder_slide ul.group_a");
			var groupB = $("section.reorder_slide ul.group_b");
			var groupC = $("section.reorder_slide ul.group_c");
			var groupD = $("section.reorder_slide ul.group_d");

			groupNodes.show();
			carFactorNodes.hide();
			typeA.appendTo(groupA);
			typeB.appendTo(groupB);
			typeC.appendTo(groupC);
			typeD.appendTo(groupD);
		});
	});
})(jQuery)
