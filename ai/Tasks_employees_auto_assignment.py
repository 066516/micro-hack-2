from math import sqrt, pow

tasks = {'task1': {'importance': 2, 'location': (30, 30), 'starting_time': 11, 'duration': 1, 'jobs': ['meca']},
        'task2': {'importance': 1, 'location': (30, 30), 'starting_time': 8, 'duration': 1.5, 'jobs': ['elec']},
        'task3': {'importance': 3, 'location': (30, 30), 'starting_time': 9, 'duration': 3, 'jobs': ['tech']},
        'task4': {'importance': 2, 'location': (30, 30), 'starting_time': 16, 'duration': 0.5, 'jobs': ['meca']},
        'task5': {'importance': 2, 'location': (30, 30), 'starting_time': 12, 'duration': 2, 'jobs': ['meca']}
        }
employees = {'employee1': {'job': 'meca', 'location': (20, 20), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee2': {'job': 'elec', 'location': (50, 20), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee3': {'job': 'tech', 'location': (20, 30), 'is_available': False, 'tasks_associated': [], 'worked_hours': 0},
             'employee4': {'job': 'meca', 'location': (30, 50), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee5': {'job': 'tech', 'location': (90, 10), 'is_available': False, 'tasks_associated': [], 'worked_hours': 0},
             'employee6': {'job': 'tech', 'location': (0, 0), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee7': {'job': 'meca', 'location': (10, 90), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee9': {'job': 'meca', 'location': (40, 40), 'is_available': False, 'tasks_associated': [], 'worked_hours': 0},
             'employee10': {'job': 'meca', 'location': (20, 10), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee11': {'job': 'elec', 'location': (0, 50), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee12': {'job': 'elec', 'location': (40, 70), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee13': {'job': 'tech', 'location': (20, 20), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
             'employee14': {'job': 'meca', 'location': (80, 90), 'is_available': True, 'tasks_associated': [], 'worked_hours': 0},
}

MAX_DISTANCE = 10000

def calculate_distance(location1, location2):
    """Calculate the distance between two locations."""
    x1, y1, x2, y2 = location1[0], location1[1], location2[0], location2[1]
    distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
    return distance

def calculate_person_productivity(worked_hours, max_work_hours=8):
    """Calculate the productivity of a person based on the worked hours."""
    return 1 - worked_hours/max_work_hours

def best_employee(tasks, employees, status):
    """
    Assign the best employee to each task based on distance and productivity.

    Args:
        tasks (dict): Dictionary containing tasks and their details.
        employees (dict): Dictionary containing employees and their details.
        status (str): Status indicating whether it's 'created' or 'updated'.

    Returns:
        dict: Dictionary mapping tasks to their assigned best employee.
    """
    if status not in ['created', 'updated']:
        raise ValueError("Invalid status. Status must be 'created' or 'updated'.")
    
    associated_employees_to_tasks_and_zones = {}

    for task_name, task in tasks.items():
        associated_employees_to_tasks_and_zones[task_name] = []
        for employee_name, employee in employees.items():
            if employee['job'] in task['jobs']:
                distance = calculate_distance(employee['location'], task['location'])
                if distance <= MAX_DISTANCE:
                    associated_employees_to_tasks_and_zones[task_name].append((employee_name, distance))
    
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


# print(best_employee(tasks, employees, 'created'))

### dir task wch ygablou mn jobs ( abda b 1 brk )
### f chaque task rani 3la employess list associated
### assocyi l kol employee i7timaliya t3 ydir task ( hna kayn chwi khorti )
### khayer the best



### 3al l7aja t3 time, dir three phases: lowla anou ki tkoun task associated, y calculate li ynasbou, w mb3d tt updata l ki yconfirmi task, ydir nafs chi, w ki ykml tt updata, ba3dha nchof kfah ndir m3a tasks



# import numpy as np
# import time

# def calculate_distance(location1, location2):
#     x1, y1, x2, y2 = location1[0], location1[1], location2[0], location2[1]
#     distance = np.sqrt(np.square(x2 - x1) + np.square(y2 - y1))
#     return distance


# def calculate_person_productivity(worked_hours, max_work_hours=8):
#     return 1 - worked_hours / max_work_hours


# max_distance = 10000
# tasks = [{'task1': {'importance': 2, 'location': (30, 30), 'duration': 100, 'jobs': ['meca']}},
#          {'task2': {'importance': 1, 'location': (30, 30), 'duration': 150, 'jobs': ['meca', 'elec']}},
#          {'task3': {'importance': 3, 'location': (30, 30), 'duration': 40, 'jobs': ['tech']}}]
# employees = [{'employee1': {'job': 'meca', 'location': (20, 20), 'is_available': True}},
#              {'employee2': {'job': 'elec', 'location': (50, 20), 'is_available': True}},
#              {'employee3': {'job': 'tech', 'location': (20, 30), 'is_available': False}},
#              {'employee4': {'job': 'meca', 'location': (30, 50), 'is_available': True}},
#              {'employee5': {'job': 'tech', 'location': (90, 10), 'is_available': False}},
#              {'employee6': {'job': 'tech', 'location': (0, 0), 'is_available': True}},
#              {'employee7': {'job': 'meca', 'location': (10, 90), 'is_available': True}},
#              {'employee8': {'job': 'elec', 'location': (40, 70), 'is_available': True}},
#              {'employee9': {'job': 'meca', 'location': (40, 40), 'is_available': False}},
#              {'employee10': {'job': 'meca', 'location': (20, 10), 'is_available': True}},
#              {'employee11': {'job': 'elec', 'location': (0, 50), 'is_available': True}},
#              {'employee12': {'job': 'elec', 'location': (40, 70), 'is_available': True}},
#              {'employee13': {'job': 'tech', 'location': (20, 20), 'is_available': True}},
#              {'employee14': {'job': 'meca', 'location': (80, 90), 'is_available': True}},
#              ]
# associated_employees_to_tasks_and_zones = {}
# for task in tasks:
#     associated_employees_to_tasks_and_zones[task] = []
#     for employee in employees:
#         if employee[list(employee.keys())[0]]['job'] in task[list(task.keys())[0]]['jobs']:
#             distance = calculate_distance(employee[list(employee.keys())[0]]['location'], task[list(task.keys())[0]]['location'])
#             if distance <= max_distance:
#                 associated_employees_to_tasks_and_zones[task].append(employee)
        
# # status = ''
# # if status == 'initial':

# for employee in employees:
#     employee[list(employee.keys())[0]]['worked_hours'] = 0


# def best_employee(associated_employees_to_tasks_and_zones):
#     productivities = {}
#     for task, employees_list in associated_employees_to_tasks_and_zones.items():
#         for employee in employees_list:
#             employee_data = employee[list(employee.keys())[0]]
#             if employee_data['is_available']:
#                 if task[list(task.keys())[0]]['importance'] == 3:
#                     productivities[employee] = calculate_person_productivity(employee_data['worked_hours'])
#                 elif task[list(task.keys())[0]]['importance'] == 2:
#                     productivities[employee] = calculate_person_productivity(5)
#                 else:
#                     productivities[employee] = calculate_person_productivity(5)
#     max_value = max(productivities.values())
#     best_employees = [key for key, value in productivities.items() if value == max_value]
#     if len(best_employees) == 1:
#         best_employee = best_employees[0]
#     elif len(best_employees) > 1:
#         distances = {}
#         for employee in best_employees:
#             distances[employee] = calculate_distance(employee[list(employee.keys())[0]]['location'], task[list(task.keys())[0]]['location'])
#         min_value = min(distances.values())
#         best_employees = [key for key, value in distances.items() if value == min_value]
#         best_employee = best_employees[0]
#     best_employee[list(best_employee.keys())[0]]['worked_hours'] += task[list(task.keys())[0]]['duration']
#     return best_employee

# best_employee(associated_employees_to_tasks_and_zones)
