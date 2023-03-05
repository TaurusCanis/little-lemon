
export default function SpecialsCard(props) {
	return (
		<article>
			<img src={props.data.img} />
			<h3>{props.data.name}</h3>
			<h3>${props.data.price}</h3>
			<p>{props.data.description}</p>
			<a href="">Order Delivery</a>
		</article>	
	);
}
