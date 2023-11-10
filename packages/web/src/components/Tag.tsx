export default function Tag(props: { children: string }) {
  return (
    <a
      href={`/tags/${props.children}`}
      className="rounded-xl bg-neutral-700 px-2 py-0.5 hover:bg-neutral-600"
    >
      {props.children}
    </a>
  );
}
