interface LastReviewedProps {
  date: string;
}

export default function LastReviewed({ date }: LastReviewedProps) {
  return <p className="text-muted/60 text-xs">Last reviewed: {date}</p>;
}
