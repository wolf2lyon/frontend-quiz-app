import { CircularProgress } from "@mui/material"

const LoadingQuizz = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <CircularProgress color="secondary" />
    </div>
  )
}

export default LoadingQuizz