// A $( document ) .ready() block.
$(document).ready(function () {
  $("#ngy2p").nanogallery2({
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom",
      display: false
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
    thumbnailAlignment: "center",
    thumbnailGutterWidth: 20,
    thumbnailGutterHieght: 20,
    thumbnailOpenImage: true
  });
});
