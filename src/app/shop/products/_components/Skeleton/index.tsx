import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonProducts() {
  return (
    <main className="mx-auto my-10 flex w-1/2 flex-col gap-y-12">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Skeleton className="h-8 w-[200px] rounded-md" />
          <Skeleton className="mt-2 h-6 w-[300px] rounded-md" />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-8 py-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="w-1/5">
            <Skeleton className="h-40 rounded-md" />
            <div className="flex flex-col gap-2 p-4">
              <Skeleton className="h-4 w-[100%]" />
              <Skeleton className="h-4 w-[100%]" />
              <Skeleton className="h-4 w-[100%]" />
              <Skeleton className="h-10 w-[100%]" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
