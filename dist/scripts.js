$(document).ready(function(){
	/* mailencrypting */
	setTimeout(function(){
		$('[data-madr1]').not('.madr-done').each(function(){
			$this = $(this);
			maddr = $this.attr('data-madr1') + '@' + $this.attr('data-madr2') + '.' + $this.attr('data-madr3');
			linktext = $this.attr('data-linktext') ? $this.attr('data-linktext') : maddr;
			$this.after( '<a href="mailto:'+maddr+'">'+ linktext + '</a> ' );
			$this.addClass('madr-done').hide();
		});
	}, 500);

	/* Fancybox */
	if(jQuery().fancybox){
		$(".fancybox").fancybox({
			parent: "form:first",
			padding: 1
		});
	}

	/* Timeline */
	$(".ti-milestone").each(function(index) {
		if(index % 2)
			$(this).addClass("ti-right");
	});

	$(".ti-date").each(function(index) {
		if(index % 2)
			$(this).addClass("ti-rightdate");
	});
});