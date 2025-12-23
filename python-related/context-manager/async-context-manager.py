class AsyncContextManager:
    async def __aenter__(self):
        print("Entering context: setup logic here.")
        return self
    
    async def __aexit__(self, exc_type, exc_value, traceback):
        print("Exiting context: teardown logic here.")
        
    async def do_something(self):
        print("Doing something inside the async context.")
        
if __name__ == "__main__":
    import asyncio

    async def main():
        async with AsyncContextManager() as acm:
            await acm.do_something()

    asyncio.run(main())