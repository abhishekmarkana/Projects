let tr = `<li class="nav-item">
<a class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"
 href="#tab-1">
<span class="text-dark" style="width: 130px;">All Products</span>
</a>
</li>`

let alldata = JSON.parse(localStorage.getItem('catInfo'))
let k = 2

alldata.map((i) => {
    tr += `<li class="nav-item">
                                <a class="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-${k++}">
                                    <span class="text-dark" style="width: 130px;">${i.Name}</span>
                                </a>
                            </li>`
})
document.getElementById("catlist").innerHTML = tr

let allprdata = JSON.parse(localStorage.getItem('proInfo'))
let pr = `<div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div class="row g-4">`


allprdata.map((j) => {
    pr += `<div class="col-md-6 col-lg-4 col-xl-3">
                                                                    <div class="rounded position-relative fruite-item">
                                                                        <div class="fruite-img">
                                                                            <img src="${j.pimg}" class="img-fluid w-100 rounded-top"
                                                                                alt="">
                                                                        </div>
                                                                        <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                                            style="top: 10px; left: 10px;">Fruits</div>
                                                                        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                            <h4>${j.pname}</h4>
                                                                            <p>${j.pDisc}</p>
                                                                            <div class="d-flex justify-content-between flex-lg-wrap">
                                                                                <p class="text-dark fs-5 fw-bold mb-0">${j.pprice} / kg</p>
                                                                                <a href="#"
                                                                                    class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                                                        class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                                                    cart</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`

})

pr += `</div>
                            </div>
                        </div>
                    </div>`

k = 2


alldata.map((i) => {
    pr += ` <div id="tab-${k++}" class="tab-pane fade show p-0">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div class="row g-4">`

    allprdata.map((j) => {
        if (i.id == j.catid) {
            pr += `<div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="rounded position-relative fruite-item">
                                            <div class="fruite-img">
                                                <img src="${j.pimg}" class="img-fluid w-100 rounded-top"
                                                    alt="">
                                            </div>
                                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                style="top: 10px; left: 10px;">Fruits</div>
                                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>${j.pname}</h4>
                                                <p>${j.pDisc}</p>
                                                <div class="d-flex justify-content-between flex-lg-wrap">
                                                    <p class="text-dark fs-5 fw-bold mb-0">${j.pprice} / kg</p>
                                                    <a href="#"
                                                        class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                            class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                        cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
        }
    })


    pr += `</div>
                            </div>
                        </div>
                    </div>`
})
document.getElementById("prdisp").innerHTML = pr