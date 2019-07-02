package com.expenseManager.ExpenseManagerAPI.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.expenseManager.ExpenseManagerAPI.domain.Expense;
import com.expenseManager.ExpenseManagerAPI.service.ExpenseService;

//@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("/expense")
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;


    @GetMapping
    public ResponseEntity<?> getAll() {
        List<Expense> result = expenseService.findAll();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/{year}/{month}")
    public ResponseEntity<?> getByMonthYear(@PathVariable("year") int year, @PathVariable("month") String month) {
        List<Expense> result = new ArrayList<>();
        if("All".equals(month)) {
            result = expenseService.findByYear(year);
        } else {
            result = expenseService.findByMonthAndYear(month, year);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addorUpdateExpense(@RequestBody Expense expense) {
        expenseService.saveOrUpdateExpense(expense);
        return new ResponseEntity("Expense added succcessfully", HttpStatus.OK);
    }

    @DeleteMapping
    public void deleteExpense(@RequestParam("id") String id) {
        expenseService.deleteExpense(id);
    }
}
