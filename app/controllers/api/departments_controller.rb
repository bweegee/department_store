class DepartmentsController < ApplicationController
  before_action :set_department, only: [:update, :destroy]

  def index
    render json: Department.all
  end

  def create
    department = Department.new(department_params)

    if department.save
      render json: department
    else
      render json: department.errors, status: 422
    end
  end

  def update
    if @department.
  end

  def destroy
  end
end
