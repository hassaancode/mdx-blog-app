import Loading from "@/components/loaders/Loading";

const loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center absolute top-0">
      <Loading />
    </div>
  );
};

export default loading;
