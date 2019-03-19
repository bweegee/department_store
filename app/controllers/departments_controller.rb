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
    if @department.save
      render json: Department.all
    else
      render json: @department.errors, status: 422
    end
  end

  def destroy
    @department.destroy
    render json: { message: "Department #{Department.name} has been destroyed" }
  end

  private
    def set_department
      @department = Department.find([:id])
    end

    def department_params
      params.require(:department).permit(:name)
    end
end