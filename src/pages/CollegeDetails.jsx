import Breadcrumbs from '../components/Breadcrumbs';
import CollegeDetailsCard from '../components/CollegeDetailsCard';
import useColleges from '../hooks/useColleges';

const CollegeDetails = () => {
    const [collegesData] = useColleges();

    return (
        <section>
            <Breadcrumbs title='My College' />
            <div className="container py-20">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">College Details</h1>
                    <p className="text-gray">Explore our list of top colleges known for their exceptional educational standards</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {
                        collegesData.map((college, index) => <CollegeDetailsCard key={index} college={college} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default CollegeDetails;