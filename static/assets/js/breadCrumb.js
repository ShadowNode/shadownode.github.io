const breadCrumb = document.getElementById("toc-menu");

function updateBreadCrumb() {
    breadCrumb.innerHTML = "<i class=\"fas fa-list-alt\"></i> Table of Contents";
}

breadCrumb.onloadstart = (updateBreadCrumb());