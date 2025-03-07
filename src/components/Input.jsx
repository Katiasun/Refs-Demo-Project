export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textare {...props} /> : <input {...props} />}
    </p>
  );
}
