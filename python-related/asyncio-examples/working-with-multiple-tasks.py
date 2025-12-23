import asyncio
import time

async def fetch_data(task_id, delay):
    print(f"Task {task_id}: Fetching data with a {delay} second delay...")
    await asyncio.sleep(delay)
    return f"Data from task {task_id}"

async def main():
    start_time = time.time()

    # Create a list of tasks
    task1 = asyncio.create_task(fetch_data(1, 3))
    task2 = asyncio.create_task(fetch_data(2, 1))
    task3 = asyncio.create_task(fetch_data(3, 2))

    # Wait for all tasks to complete
    results = await asyncio.gather(task1, task2, task3)

    end_time = time.time()
    total_time = end_time - start_time

    print("\n--- Results ---")
    for result in results:
        print(result)

    print(f"\nTotal time taken: {total_time:.2f} seconds")

if __name__ == "__main__":
    asyncio.run(main())