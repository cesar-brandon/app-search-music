interface ButtonProps {
  content: string;
  onClick: (e: any) => void;
  state?: string;
}

export default function Button({ content, onClick, state }: ButtonProps) {
  return (
    <div className="Button__container">
      <button className={`Button ${state}`} type="submit" onClick={onClick}>
        {content}
      </button>
    </div>
  );
}
