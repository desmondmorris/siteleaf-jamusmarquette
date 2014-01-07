changeImg = (lnk) ->
  project = $(lnk).parent().parent().parent().parent().parent().attr("id")
  targetImg = $("#" + project + " .project_image img")
  sourceImg = $(lnk).attr("href")
  sourceImgKey = lnk.innerHTML
  targetImg.attr "src", sourceImg
  targetImg.attr "rel", sourceImgKey
  $("#" + project + " .project_image").height = "auto"
  false
prevImg = (lnk) ->
  project = $(lnk).parent().parent().parent().attr("id")
  pagingList = $("#" + project + " div.project_image_paging ul.paging_list")
  currentImg = parseInt($("#" + project + " .project_image img").attr("rel"))
  pages = pagingList.children()
  unless currentImg is "1"
    key = currentImg - 1
  else
    key = pages.length
  $("#" + project + " li a").css "color", "#000000"
  $("#" + project + " li.paging_list_item_" + key + " a").css "color", "#eeeeee"
  sourceImg = $("#" + project + " li.paging_list_item_" + key + " a").attr("href")
  $("#" + project + " .project_image img").attr "src", sourceImg
  $("#" + project + " .project_image img").attr "rel", key
  false
nextImg = (lnk) ->
  if $(lnk).parent().attr("class") is "project_image"
    project = $(lnk).parent().parent().attr("id")
  else
    project = $(lnk).parent().parent().parent().attr("id")
  pagingList = $("#" + project + " div.project_image_paging ul.paging_list")
  currentImg = parseInt($("#" + project + " .project_image img").attr("rel"))
  pages = pagingList.children()
  unless currentImg is pages.length
    key = currentImg + 1
  else
    key = 1

  $("#" + project + " li a").css "color", "#000000"
  $("#" + project + " li.paging_list_item_" + key + " a").css "color", "#eeeeee"
  sourceImg = $("#" + project + " li.paging_list_item_" + key + " a").attr("href")
  $("#" + project + " .project_image img").attr "src", sourceImg
  $("#" + project + " .project_image img").attr "rel", key
  false

$(document).ready ->
  $("div#sections > div").hide()
  $("div#sections > a").click ->
    $(this).next("div").slideToggle("fast").siblings("div:visible").slideUp "fast"
    $("div#Projects > div").hide()

  $("div#Projects > div").hide()
  $("div#Projects > a").click ->
    $(this).next("div").slideToggle("fast").siblings("div:visible").slideUp "fast"

  $("div.project_element div.project_image_paging ul.paging_list li a").click ->
    $("div.project_element div.project_image_paging ul.paging_list li a").css "color", "#000000"
    $(this).css "color", "#eeeeee"
    changeImg this

  $("div.project_element div.project_image_paging a.paging_prev").click ->
    prevImg this

  $("div.project_element div.project_image_paging a.paging_next").click ->
    nextImg this

  $("div.project_element div.project_image img").click ->
    nextImg this

  $("div.project_element div.project_image img").css "cursor", "pointer"
  $("a.paging_prev").css "cursor", "pointer"
  $("a.paging_next").css "cursor", "pointer"
