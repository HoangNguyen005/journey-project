
import './hero.css'
import background  from '../../assets/imgs/nike-sneakers-wallpaper-preview-hero.jpg'

function Hero() {
    // const [active, setActive] = useState(false);
    return (
        <div className='hero container  mx-auto h-[260px] lg:h-[600px]'>
            <img src={background} className='size-full rounded-2xl b object-cover' alt="" />
        </div>
    );
}

export default Hero;