export default function FieldLayout({ field, onClick }) {
	return (
		<div className="gameField">
			{field.map((fieldBox, index) => (
				<div
					className="fiedlValueBox"
					key={index}
					onClick={() => onClick(index)}
				>
					{fieldBox}
				</div>
			))}
		</div>
	)
}
