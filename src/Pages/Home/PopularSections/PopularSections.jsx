import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../../Hooks/UseMenu';
import { Link } from 'react-router-dom';

const PopularSections = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('https://bistro-boss-server-murex.vercel.app/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         // const popularItems = data.filter(item => item.category === 'popular');
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //         console.log(setMenu);
    //     })
    // },[])

    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <Link to='/menu'><button className=" p-4 btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button></Link>
            
        </section>
    );
};

export default PopularSections; 