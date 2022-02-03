import "../../assets/scss/messages/success.scss";

const Success = ({ content }: { content: string }) => {
  return (
    <div className="success">
      <p>{content}</p>
    </div>
  );
};
export default Success;
