import logo from './assets/logo.png'
//icons
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa';


interface SocialMedia{
  id:number;
  title:string;
  url:string;
  icone: React.ReactNode;
}



function Footer() {
   //SocialMedia
   const SocialMedia:SocialMedia[]=[
    { id:1, title:'Facebook', url:'./',icone: <FaFacebook />,}, 
    { id:2, title:'Twitter', url:'./',icone: <FaTwitter/>},
    { id:3, title:'Instagram', url:'./',icone: <FaInstagram />},
    { id:4, title:'Youtube', url:'./',icone: <FaYoutube />}
   ]
   //Use Cases
   const Cases=[
    { id:1, title:'Abstergo Ltd.', url:'./'},
    { id:2, title:'Nursing Assistant', url:'./'},
    {  id:3, title:'Medical Assistant', url:'./'},
    {  id:4, title:'Marketing Coordinator', url:'./'},
    { id:5, title:'AbstergDog Trainer', url:'./'},
    { id:6, title:' Web Designer', url:'./'},
    {  id:7, title:'President of Sales', url:'./'},
    {  id:9, title:'Medical Assistant', url:'./'}
   ]
   //Categories
   const Categories=[
    { id:1, title:' Algeria', url:'./'},
    { id:2, title:'South Africa ', url:'./'},
    {  id:3, title:' Central African Republic', url:'./'},
    {  id:4, title:' Afghanistan', url:'./'},
    { id:5, title:' Viet Nam', url:'./'},
    { id:6, title:' Viet Nam ', url:'./'},
    {  id:7, title:' Cameroun', url:'./'},
    {  id:9, title:' Pakistan', url:'./'}
   ]
   //Documentations
   const Documentations=[
    { id:1, title:' Dog Trainer', url:'./'},
    { id:2, title:'Nursing Assistant  ', url:'./'},
    {  id:3, title:'Marketing Coordinator', url:'./'},
    {  id:4, title:' President of Sales', url:'./'},
    { id:5, title:' Web Designer', url:'./'},
    { id:6, title:' Medical Assistant ', url:'./'},
    {  id:7, title:' Dog Trainer', url:'./'},
    {  id:9, title:' President of Sales', url:'./'}
   ]
   //Our Condition
   const Condition=[
    { id:1, title:' Ethical Hacker', url:'./'},
    { id:2, title:'UI/UX Designer ', url:'./'},
    {  id:3, title:'Software Tester', url:'./'},
    {  id:4, title:' Scrum Master', url:'./'},
    { id:5, title:'Project Manager', url:'./'},
    { id:6, title:'Team Leader', url:'./'},
    {  id:7, title:' Software Development ', url:'./'},
    {  id:9, title:' Software Developer', url:'./'}
   ]
  return (
    <div className="flex flex-row items-center justify-between  w-full  border-t-2 pt-[7rem] px-7 ">
    <div>
    <img src={logo} alt="workflow" className='w-[7rem] h-[3rem] font-bold' /> 
      <ul className=' text-[#4B5563]'>
        {SocialMedia.map((SocialMedia,index)=>
        <li key={index} >
          <a href={SocialMedia.url} className='flex flex-row p-3  hover:text-black'>  <span className='p-1'>{SocialMedia.icone}</span> {SocialMedia.title} </a>
        </li> ) }
      </ul></div>

      <div>
        <h1 className='text-[#1F2937] font-bold'>Use Cases</h1>
      <ul className=' text-[#4B5563]'>
        {Cases.map((Cases,index)=>
        <li key={index}>
          <a href={Cases.url} className=' hover:text-black'>{Cases.title}</a>
        </li> ) }
      </ul></div>
      <div>
        <h1 className='text-[#1F2937] font-bold '>Categories</h1>
      <ul className=' text-[#4B5563]'>
        {Categories.map((Categories,index)=>
        <li key={index}>
          <a href={Categories.url} className=' hover:text-black'>{Categories.title} </a>
        </li> ) }
      </ul></div>
      <div>
        <h1 className='text-[#1F2937] font-bold'>Documentations</h1>
      <ul className=' text-[#4B5563]'>
        {Documentations.map((Documentations,index)=>
        <li key={index}>
          <a href={Documentations.url} className=' hover:text-black'>{Documentations.title} </a>
        </li> ) }
      </ul></div>
      <div>
        <h1 className='text-[#1F2937] font-bold'>Our Condition</h1>
      <ul className=' text-[#4B5563]'>
        {Condition.map((Condition,index)=>
        <li key={index}>
          <a href={Condition.url} className=' hover:text-black'>{Condition.title} </a>
        </li> ) }
      </ul></div>















      
    </div>
  )
}

export default Footer