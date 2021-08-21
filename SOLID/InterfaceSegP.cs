//No Interface Segregation Principle

//Large Interface
Interface ICarBoatInterface
{
	void drive();
	void turnLeft();
	void turnRight();
	void steer();
	void steerLeft();
	void steerRight();
}



//Interface Segregation Principle
//two small interfaces (Car, Boat)
Interface ICarInterface
{
	void drive();
	void turnLeft();
	void turnRight();
}

Interface IBoatInterface
{
	void steer();
	void steerLeft();
	void steerRight();
}


class Avante : ICarInterface
{
	public void drive()
	{
		//implemenetation
	}
	public void turnLeft()
	{
		//implmementation
	}
	public void turnRight()
	{
		//implementation
	}
}


class CarBoat :ICarInterface , IBoatInterface
{
	public void drive()
	{
		//implemenetation
	}
	public void turnLeft()
	{
		//implmementation
	}
	public void turnRight()
	{
		//implementation
	}
	public void steer()
	{
		//implemenetation
	}
	public void steerLeft()
	{
		//implmementation
	}
	public void steerRight()
	{
		//implementation
	}
}