console.log("Pulling myself up by my bootstraps.");

const dangPie = [
    {
        name: 'moon pie',
        image: 'https://www.browneyedbaker.com/wp-content/uploads/2011/03/moon-pies-2-550.jpg',
        instructor: 'greg',
        iceCream: 'vanilla'
    },
    {
        name: 'meat pie',
        image: 'https://www.bhg.com.au/media/1899/pie_20160518_bhg.jpg',
        instructor:'michael',
        iceCream: 'banana'
    },
    {
        name: 'key lime pie',
        image: 'http://www.pinkwhen.com/wp-content/uploads/2013/11/Key-Lime-Pie-via-PinkWhen.com_-600x400.jpg?ac5e65',
        instructor: 'callan',
        iceCream: 'strawberry'
    },
    {
        name: 'rhubarb pie',
        image: 'http://assets.simplyrecipes.com/wp-content/uploads/2014/06/strawberry-rhubarb-pie-horiz-a-1600.jpg',
        instructor: 'maria',
        iceCream: 'coffee'
    },
    {
        name: 'kentucky derby pie',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kentucky_Chocolate_walnut_pie_slice.JPG/1200px-Kentucky_Chocolate_walnut_pie_slice.JPG',
        instructor:'zoe',
        iceCream: 'none'
    },
    {
        name: 'sweet potato pie',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/SweetPotatoPie.jpg/1200px-SweetPotatoPie.jpg',
        instructor:'zoe',
        iceCream: 'chocolate'
    }
];

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const cardBuilder = (pieArray) => {
    //build a giant strign pf pie cards
    let domString = '<div class="row">'
    for (let i = 0; i < pieArray.length; i++) {
        const currentPie = pieArray[i]
        domString += `
            <div class="col-3">
                <div class="card">
                    <img src="${currentPie.image}" class="card-img-top" alt="${currentPie.name}">
                    <div class="card-body">
                        <h5 class="card-title">${currentPie.name}</h5>
                        <p class="card-text">${currentPie.instructor}, ${currentPie.iceCream}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`
    }
    domString += '</div>'
    printToDOM(domString, 'pie-zone')
  };

  cardBuilder(dangPie)

//const buttonClick = (e) =>{
    //const instructor = e.target.id
    //const selectedPies = []
    //for (let i = 0; i < dangPie.length; i++) {
        //const pie = dangPie[i]
        //if (pie.instructor === instructor) {
            //selectedPies.push(pie);
        //}
  //  }
    
//}

 // document.getElementById('zoe').addEventListener('click', buttonClick)
  //document.getElementById('michael').addEventListener('click', buttonClick)
  //document.getElementById('greg').addEventListener('click', buttonClick)
  //document.getElementById('callan').addEventListener('click', buttonClick)
  //document.getElementById('maria').addEventListener('click', buttonClick)