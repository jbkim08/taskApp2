import "./Tag.css";

export default function Tag({ tagName, selectTag }) {
  return (
    <button className="tag" onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
}
