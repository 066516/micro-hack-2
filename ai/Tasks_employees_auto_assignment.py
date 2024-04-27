from math import sqrt, pow
import json

# Read tasks from JSON file
with open('tasks.json', 'r') as f:
    tasks = json.load(f)

# Read employees from JSON file
with open('employees.json', 'r') as f:
    employees = json.load(f)

## This distance is dynamic and the boss is the one who can define it with what is appropriate to his workers
MAX_DISTANCE = 10000

def calculate_distance(location1, location2):
    x1, y1, x2, y2 = location1[0], location1[1], location2[0], location2[1]
    distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
    return distance

def calculate_person_productivity(worked_hours, max_work_hours=8):
    return 1 - worked_hours/max_work_hours

def best_employee(tasks, employees, status):

    # Assign the best employee to each task based on distance and productivity.

    # Args:
    #     tasks (dict): Dictionary containing tasks and their details.
    #     employees (dict): Dictionary containing employees and their details.
    #     status (str): Status indicating whether it's 'created' or 'updated'.

    # Returns:
    #     dict: Dictionary mapping tasks to their assigned best employee.

    if status not in ['created', 'updated']:
        raise ValueError("Invalid status. Status must be 'created' or 'updated'.")
    
    ## Associating employees to the tasks they can work on and according to their zones
    associated_employees_to_tasks_and_zones = {}
    for task_name, task in tasks.items():
        associated_employees_to_tasks_and_zones[task_name] = []
        for employee_name, employee in employees.items():
            if employee['job'] in task['jobs']:
                distance = calculate_distance(employee['location'], task['location'])
                if distance <= MAX_DISTANCE:
                    associated_employees_to_tasks_and_zones[task_name].append((employee_name, distance))

    ## in case of new assignment in the first of the day
    if status == 'created':
        for employee in employees.values():
            employee['worked_hours'] = 0
    
    final = {}
    for task_name, task in associated_employees_to_tasks_and_zones.items():
        best_employee = None
        min_distance = float('inf')
        max_productivity = -float('inf')
        for employee_name, distance in task:
            if employees[employee_name]['is_available']:
                productivity = calculate_person_productivity(employees[employee_name]['worked_hours'])
                if status == 'updated':
                    ## Handling the merging that may happen when assigning a task to a person who already has tasks
                    ## ex: can't assign a task of 4 hours to a person who already has a task after 1 hour
                    for task in employees[employee_name]['tasks_associated']:
                        if tasks[task_name]['starting_time']  < task['starting_time'] and tasks[task_name]['starting_time'] + tasks[task_name]['duration'] >= task['starting_time']:
                            continue                   
                    if productivity > max_productivity:
                        max_productivity = productivity
                        best_employee = employee_name
                        min_distance = distance
                    elif productivity == max_productivity and distance < min_distance:
                        best_employee = employee_name
                        min_distance = distance
        if best_employee is not None:
            employees[best_employee]['worked_hours'] += tasks[task_name]['duration']
            employees[best_employee]['tasks_associated'].append(tasks[task_name])
            final[task_name] = best_employee
                    
    return final

try:
    print(best_employee(tasks, employees, 'updated'))
except ValueError as e:
    print("Error:", e)

print(employees)

