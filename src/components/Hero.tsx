import heroImage from "../assets/hero-image.png"

type Props = {};

const Hero = (props: Props) => {
	return (
		<section className="max-w-screen-lg h-screen flex justify-center items-center px-6">
			<div className="text-5xl">
				<p>Hi, there!👋</p>
				<p>My name is Arif</p>
				<p>I am a Software Engineer</p>
			</div>
      <div className="max-w-md">
        <img src={heroImage} alt="Person writing code" />
			</div>
		</section>
	);
}

export default Hero;
