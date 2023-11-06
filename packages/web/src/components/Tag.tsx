export default function Tag(props: { children: string }) {
  return (
    <a href={`/tags/${props.children}`} className="bg-neutral-700 rounded-xl px-2 py-0.5 hover:bg-neutral-600">
      {props.children}
    </a>
  );
}
