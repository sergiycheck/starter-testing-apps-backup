import asyncio
import time

def blocking_function():
    """A blocking, synchronous function."""
    time.sleep(2)
    print("Blocking function finished")

async def main():
    print("Starting blocking call...")
    await asyncio.to_thread(blocking_function)
    # task = asyncio.create_task(blocking_function())
    print("Blocking call completed asynchronously")
    # return await task

if __name__ == "__main__":
    asyncio.run(main())