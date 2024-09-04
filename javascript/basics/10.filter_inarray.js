const smartPhone = [
   
    {Brand:'Vivo v9e', Version:'13 gen', Reliesedate:'01/01/2025', Price:'255$'},
    {Brand:'Oppo O21', Version:'13.2 gen', Reliesedate:'20/05/2025', Price:'240$'},
    {Brand:'Spice s2', Version:'14 gen', Reliesedate:'02/04/2026', Price:'260$'},
    {Brand:'Samsung A18', Version:'13.5 gen', Reliesedate:'13/02/2025', Price:'266$'},
    {Brand:'Oneplus', Version:'12 gen', Reliesedate:'15/12/2024', Price:'451$'},
    {Brand:'Nokia', Version:'13 gen', Reliesedate:'25/12/2025', Price:'256$'},
    {Brand:'Poco', Version:'15 gen', Reliesedate:'01/01/2025', Price:'444$'},
    {Brand:'MI', Version:'14.5 gen', Reliesedate:'08/03/2023', Price:'165&'},
    {Brand:'Asus', Version:'15 gen', Reliesedate:'07/10/2024', Price:'126$'},
    {Brand:'Iphone', Version:'15 gen', Reliesedate:'01/01/2025', Price:'869&',}

];  //ek array h jisme bahut saare object bne pde h 


// let buyer = smartPhone.filter( (phones) => phones.Price > '170$')

/*buyer = smartPhone.filter( (phone) => {return phone.Version >= '13.5'})*/ //esme mene scope{} use kiya h to return lgana jaruri h


buyer = smartPhone.filter( (phone) => {return phone.Version >= '13.5' && phone.Price > '170$'}) //esme do condition use kri h && lgake

console.log(buyer)