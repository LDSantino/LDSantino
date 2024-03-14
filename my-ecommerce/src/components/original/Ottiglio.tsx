export function Video() {
  return (
    <video className="h-full w-full rounded-lg" controls autoPlay>
      <source src=../../vid/ottiglio.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
