let alldata = JSON.parse(localStorage.getItem('catInfo'))

let tr = '<option>----------select Category-----------</option>'
alldata.map((i) => {
    tr += `<option value = ${i.id}>${i.Name}</option>`
})

document.querySelector("#prcatid").innerHTML = tr

let proData = []
const savePro = () => {
    let allprdata = JSON.parse(localStorage.getItem('proInfo'))

    let proname = document.prfrm.prname.value
    let proPrice = document.prfrm.prprice.value
    let prcatid = document.prfrm.prcatid.value
    let proDisc = document.prfrm.des.value
    let proimg = localStorage.getItem('prodimg')

    let id_len = (allprdata != null) ? allprdata.length + 1 : 1;
    let proid = document.prfrm.proid.value

    if (proid != '') {
        let result = allprdata.map((i) => {
            if (i.id == proid) {
                i.pname = proname;
                i.catid = prcatid;
                i.pprice = proPrice;
                i.pDisc = proDisc;
                i.pimg = proimg != null ? proimg : i.pimg
            }
            return i;
        })
        proData = result
    } else {
        let proobj = {
            id: id_len,
            pname: proname,
            catid: prcatid,
            pprice: proPrice,
            pDisc: proDisc,
            pimg: proimg,
        }
        proData.push(proobj)
    }
    document.prfrm.proid.value = ''
    localStorage.setItem('proInfo', JSON.stringify(proData))
    document.prfrm.reset();
    document.querySelector("#image").src = ''
    localStorage.removeItem('prodimg')
    displ()
}
let displ = () => {
    let allprdata = JSON.parse(localStorage.getItem('proInfo'))
    let tr = ''
    allprdata.map((i) => {
        alldata.map((j) => {
            if (j.id == i.catid) {
                i.catname = j.Name
            }
            return i;
        })

        tr += `<tr>
        <td>${i.id}</td>
        <td><img src=${i.pimg} height=50px width=50px></td>
        <td>${i.pname}</td>
        <td>${i.catname}</td>
        <td>${i.pprice}</td>
        <td><button class="btn btn-info" onclick="editpro(${i.id})"><i class="fa fa-pen"></i></button>&nbsp;
         <button class="btn btn-danger" onclick="delepro(${i.id})"><i class="fa fa-trash"></i></button>
         </td>`
    })
    document.querySelector("#tblprData").innerHTML = tr
}
const delepro = (id) => {
    let allprdata = JSON.parse(localStorage.getItem("proInfo"))
    let arr = allprdata.filter((i) => {
        return i.id != id;
    })

    let j = 1
    let a = arr.map((i) => {
        i.id = j++;
        return i;
    })
    localStorage.setItem('proInfo', JSON.stringify(a))
    displ()
}
const editpro = (id) => {
    let allprdata = JSON.parse(localStorage.getItem("proInfo"))
    let arr = allprdata.find((i) => {
        return i.id == id;
    })
    document.prfrm.prname.value = arr.pname
    document.prfrm.prprice.value = arr.pprice
    document.prfrm.prcatid.value = arr.catid
    document.prfrm.des.value = arr.pDisc
    document.querySelector("#image").src = arr.pimg
    document.getElementById('proid').value = id
}

const imgdis = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
        document.getElementById('image').src = reader.result;
        localStorage.setItem('prodimg', reader.result)
    }
    reader.readAsDataURL(event.target.files[0]);
}
displ()