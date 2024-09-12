import heroImage from "../assets/hero-image.png"

type Props = {};

const About = (props: Props) => {
	return (
		<section id="about" className="max-w-screen-lg flex justify-center items-center px-6 pt-20">
      <div className="max-w-md">
      	<img src={heroImage} />
      </div>
			<div className="">
				<h1 className="text-3xl">About Me</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
					pariatur quaerat mollitia laudantium id eum molestias dolorem ut ipsam
					rerum, facere accusamus? Numquam ipsa nulla quas. Totam, a voluptatem!
					Culpa possimus doloremque enim a, unde temporibus nobis, natus
					molestias sunt iusto facilis, accusantium id odio voluptatibus
					mollitia? Reprehenderit. Totam, a voluptatem! Culpa possimus
					doloremque enim a, unde temporibus nobis, natus molestias sunt iusto
					facilis, accusantium id odio voluptatibus mollitia? Reprehenderit.
				</p>
			</div>
		</section>
	);
}

export default About;
