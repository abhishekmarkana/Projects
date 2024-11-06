 let catData = []

 const saveData = () => {
     let alldata = JSON.parse(localStorage.getItem("catInfo"))

     let id_len = (alldata != null) ? alldata.length + 1 : 1;
     let cname = document.catfrm.catname.value;

     let catid = document.catfrm.catid.value;
     if (catid != '') {
         let result = alldata.map((i) => {
             if (i.id == catid) {
                 i.Name = cname;
             }
             return i;
         })
         catData = result
     } else {
         let obj = {
             id: id_len,
             Name: cname
         }
         catData.push(obj)
     }
     document.catfrm.catid.value = ''
     localStorage.setItem('catInfo', JSON.stringify(catData))
     document.catfrm.reset();
     displ()
 }

 let displ = () => {
     let alldata = JSON.parse(localStorage.getItem("catInfo"))
     tr = '';

     alldata.map((i) => {
         tr += `<tr>
        <td>${i.id}</td>
        <td>${i.Name}</td>
         <td><button class="btn btn-info" onclick="editCat(${i.id})"><i class="fa fa-pen"></i></button>&nbsp;
         <button class="btn btn-danger" onclick="delecat(${i.id})"><i class="fa fa-trash"></i></button>
         </td>
    </tr>`
     })
     document.querySelector("#tblCatData").innerHTML = tr
 }

 const delecat = (id) => {
     let alldata = JSON.parse(localStorage.getItem("catInfo"))
     let arr = alldata.filter((i) => {
         return i.id != id;
     })

     let j = 1
     let a = arr.map((i) => {
         i.id = j++;
         return i;
     })
     localStorage.setItem('catInfo', JSON.stringify(a))
     displ()
 }
 const editCat = (id) => {
     let alldata = JSON.parse(localStorage.getItem("catInfo"))
     let arr = alldata.find((i) => {
         return i.id == id;
     })
     document.catfrm.catname.value = arr.Name
     document.getElementById('catid').value = id //hidden fild
 }

 displ()