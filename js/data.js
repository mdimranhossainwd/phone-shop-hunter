const loadData = async (searchValue) => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => displayPhones(data))

    const res = await fetch(`
    https://openapi.programming-hero.com/api/phones?search=${searchValue}
    `)
    const data = await res.json()
    const phones = data.data;
    displayPhones(phones)

}

const displayPhones = mobile => {
    const productContainer = document.getElementById('product-container')
    productContainer.textContent = ''
    for (const phone of mobile) {
        console.log(phone);
        const newEL = document.createElement('div');
        newEL.classList = 'card border pt-8 '
        newEL.innerHTML = `
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body justify-center text-center">
            <h2 class="text-xl font-medium">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="mt-4">
                <button class="btn bg-[#0D6EFD] hover:bg-[#0D6EFD] px-8 py-4 capitalize text-white font-bold">Show Details</button>
            </div>
            </div>
        `
        productContainer.appendChild(newEL)
    }

    // phones.forEach(phone => {
        
    // });

}

const serachPhone = () => {
    const serachField = document.getElementById('input-field');
    const searchValue = serachField.value 
    serachField.value = ''
    console.log(searchValue);
    loadData(searchValue)

}

loadData()