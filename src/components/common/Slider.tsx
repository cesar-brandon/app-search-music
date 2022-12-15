interface SliderProps {
  data: string[];
}

export default function Slider({ data }: SliderProps) {
  return (
    <div className="Slider">
      <div className="Slider__track primary">
        {data.map((item, index) => (
          <div className="Slider__item" key={index}>
            {item.includes("https://") ? (
              <img src={item} alt="Slider" />
            ) : (
              <>{item}</>
            )}
          </div>
        ))}
      </div>
      <div className="Slider__track secondary">
        {data.map((item, index) => (
          <div className="Slider__item" key={index}>
            {item.includes("https://") ? (
              <img src={item} alt="Slider" />
            ) : (
              <>{item}</>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
