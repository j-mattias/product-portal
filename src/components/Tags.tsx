interface ITagsProps {
  tags: string[];
  className?: string;
}

export function Tags({ tags, className }: ITagsProps) {
  return (
    <ul className={`tags ${className}`}>
      {tags.map((tag) => (
        <li className="tags__item" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
