import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Click me" style="bg-blue-500 text-white" />
      </div>
    )
  }
  export default Landing