var changeImg, nextImg, prevImg;

changeImg = function(lnk) {
  var project, sourceImg, sourceImgKey, targetImg;
  project = $(lnk).parent().parent().parent().parent().parent().attr("id");
  targetImg = $("#" + project + " .project_image img");
  sourceImg = $(lnk).attr("href");
  sourceImgKey = lnk.innerHTML;
  targetImg.attr("src", sourceImg);
  targetImg.attr("rel", sourceImgKey);
  $("#" + project + " .project_image").height = "auto";
  return false;
};

prevImg = function(lnk) {
  var currentImg, key, pages, pagingList, project, sourceImg;
  project = $(lnk).parent().parent().parent().attr("id");
  pagingList = $("#" + project + " div.project_image_paging ul.paging_list");
  currentImg = parseInt($("#" + project + " .project_image img").attr("rel"));
  pages = pagingList.children();
  if (currentImg !== "1") {
    key = currentImg - 1;
  } else {
    key = pages.length;
  }
  $("#" + project + " li a").css("color", "#000000");
  $("#" + project + " li.paging_list_item_" + key + " a").css("color", "#eeeeee");
  sourceImg = $("#" + project + " li.paging_list_item_" + key + " a").attr("href");
  $("#" + project + " .project_image img").attr("src", sourceImg);
  $("#" + project + " .project_image img").attr("rel", key);
  return false;
};

nextImg = function(lnk) {
  var currentImg, key, pages, pagingList, project, sourceImg;
  if ($(lnk).parent().attr("class") === "project_image") {
    project = $(lnk).parent().parent().attr("id");
  } else {
    project = $(lnk).parent().parent().parent().attr("id");
  }
  pagingList = $("#" + project + " div.project_image_paging ul.paging_list");
  currentImg = parseInt($("#" + project + " .project_image img").attr("rel"));
  pages = pagingList.children();
  if (currentImg !== pages.length) {
    key = currentImg + 1;
  } else {
    key = 1;
  }
  $("#" + project + " li a").css("color", "#000000");
  $("#" + project + " li.paging_list_item_" + key + " a").css("color", "#eeeeee");
  sourceImg = $("#" + project + " li.paging_list_item_" + key + " a").attr("href");
  $("#" + project + " .project_image img").attr("src", sourceImg);
  $("#" + project + " .project_image img").attr("rel", key);
  return false;
};

$(document).ready(function() {
  $("div#sections > div").hide();
  $("div#sections > a").click(function() {
    $(this).next("div").slideToggle("fast").siblings("div:visible").slideUp("fast");
    return $("div#Projects > div").hide();
  });
  $("div#Projects > div").hide();
  $("div#Projects > a").click(function() {
    return $(this).next("div").slideToggle("fast").siblings("div:visible").slideUp("fast");
  });
  $("div.project_element div.project_image_paging ul.paging_list li a").click(function() {
    $("div.project_element div.project_image_paging ul.paging_list li a").css("color", "#000000");
    $(this).css("color", "#eeeeee");
    return changeImg(this);
  });
  $("div.project_element div.project_image_paging a.paging_prev").click(function() {
    return prevImg(this);
  });
  $("div.project_element div.project_image_paging a.paging_next").click(function() {
    return nextImg(this);
  });
  $("div.project_element div.project_image img").click(function() {
    return nextImg(this);
  });
  $("div.project_element div.project_image img").css("cursor", "pointer");
  $("a.paging_prev").css("cursor", "pointer");
  return $("a.paging_next").css("cursor", "pointer");
});
