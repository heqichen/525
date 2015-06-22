#ifndef __CIRCLE_LIST_H__
#define __CIRCLE_LIST_H__

#include <Arduino.h>


/*
-------------------------------------------------------------
|  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
-------------------------------------------------------------
|  .  |  .  |  X  |  X  |  X  |  X  |  X  |  .  |  .  |  .  |
-------------------------------------------------------------
               ^                             ^
               |                             |
             mRear                          mFront
*/


template <typename T>
class CircleList
{
	public:
		CircleList(int length)
			:	mFront	(0),
				mRear	(0),
				mLength	(length),
				mElemNum	(0)
		{
			mList = new T[mLength];
		}

		void pushFront(T e)
		{
			if (!isFull())
			{
				mList[mFront] = e;
				++mElemNum;
				if (mFront == mLength-1)
				{
					mFront = 0;
				}
				else
				{
					++mFront;
				}
			}
		}

		void pushRear(T e)
		{
			if (!isFull())
			{
				if (mRear == 0)
				{
					mRear = mLength - 1;
				}
				else 
				{
					--mRear;
				}
				mList[mRear] = e;
				++mElemNum;
			}
		}



		bool isFull()
		{
			return (mElemNum == mLength);
		}

		bool isEmpty()
		{
			return (mElemNum == 0);
		}

		T popFront()
		{
			if (!isEmpty())
			{
				if (mFront == 0)
				{
					mFront = mLength - 1;
				}
				else
				{
					--mFront;
				}
				--mElemNum;
				return mList[mFront];
			}
			else
			{
				return mList[0];
			}
		}

		T popRear()
		{
			T ret = mList[mRear];
			if (!isEmpty())
			{
				if (mRear == mLength-1)
				{
					mRear = 0;
				}
				else
				{
					++mRear;
				}
			}
			--mElemNum;

			return ret;
		}
	private:
		int mFront;
		int mRear;
		int mLength;
		int mElemNum;
		T *mList;
};

#endif
