import asyncio

async def test():
    task = asyncio.current_task()
    for frame in task.get_stack():
      print(frame)

async def main():
    async with asyncio.TaskGroup() as g:
        g.create_task(test(), name='test')

asyncio.run(main())