import AwesomeSlider from 'react-awesome-slider';

export default function Content() {
    return (
        <div className="sliderPage">

            <h1 className="sliderTitle">
                Галерея животных
            </h1>

            <AwesomeSlider>
                <div data-src="/images/pic1.jpg" />
                <div data-src="/images/pic2.jpg" />
                <div data-src="/images/pic3.jpg" />
            </AwesomeSlider>

        </div>
    );
}