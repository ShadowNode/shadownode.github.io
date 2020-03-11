const breadCrumb = document.getElementById("toc-menu");
breadCrumb.hidden = true;
const tableOfContents = document.getElementById("TableOfContents");
if (!String.prototype.trim) {
    String.prototype.trim = function() { return this.replace(/^\s+|\s+$/, ''); };
}
function updateBreadCrumb() {
    if (tableOfContents.innerHTML.trim() !== "") {
        breadCrumb.innerHTML = "<i class=\"fas fa-list-alt\"></i> Table of Contents";
        breadCrumb.hidden = false;
    }
}
breadCrumb.onloadstart = (updateBreadCrumb());